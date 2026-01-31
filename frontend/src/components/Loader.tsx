import styled from "styled-components";

interface LoaderProps {
  // Added "table-row" to the allowed types
  variant?: "list" | "followers" | "profile" | "table-row";
}

const Loader = ({ variant = "list" }: LoaderProps) => {
  return (
    <StyledSkeleton variant={variant}>
      {variant === "followers" && (
        <>
          <div className="avatar-sm" />
          <div className="line-sm" />
        </>
      )}

      {variant === "list" && (
        <>
          <div className="avatar" />
          <div className="lines">
            <div className="line short" />
            <div className="line long" />
          </div>
        </>
      )}

      {variant === "profile" && (
        <div className="profile-wrapper">
          <div className="avatar-big" />
          <div className="big-line" />
          <div className="big-line" />
          <div className="big-line" />
        </div>
      )}

      {/* New logic for table rows in the dashboard */}
      {variant === "table-row" && (
        <div className="table-row-grid">
           <div className="line cell-sm" />
           <div className="line cell-md" />
           <div className="line cell-lg" />
           <div className="line cell-sm" />
        </div>
      )}
    </StyledSkeleton>
  );
};

export default Loader;

const StyledSkeleton = styled.div<{ variant: string }>`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  background: #0f0f0f;

  ${({ variant }) => variant === "list" && `
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px;
    background: #0d0d0d;
  `}

  ${({ variant }) => variant === "followers" && `
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    height: 56px;
    background: #0d0d0d;
  `}

  ${({ variant }) => variant === "profile" && `
    padding: 24px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  /* New CSS for the Dashboard Table Row */
  ${({ variant }) => variant === "table-row" && `
    padding: 20px;
    background: rgba(30, 41, 59, 0.3);
    border: 1px solid rgba(51, 65, 85, 0.5);
    .table-row-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 1fr;
        gap: 20px;
        align-items: center;
    }
  `}

  /* ELEMENTS */
  .avatar {
    width: 42px;
    height: 42px;
    background: #262626;
    border-radius: 50%;
    position: relative;
  }

  .avatar-sm {
    width: 38px;
    height: 38px;
    background: #262626;
    border-radius: 50%;
    position: relative;
  }

  .avatar-big {
    width: 100px;
    height: 100px;
    background: #262626;
    border-radius: 50%;
    margin-bottom: 16px;
    position: relative;
  }

  .lines {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .line {
    height: 10px;
    border-radius: 6px;
    background: #262626;
    position: relative;
  }

  .cell-sm { width: 60px; }
  .cell-md { width: 100px; }
  .cell-lg { width: 100%; }

  .short { width: 120px; }
  .long { width: 70%; }

  .line-sm {
    width: 160px;
    height: 10px;
    border-radius: 6px;
    background: #262626;
    position: relative;
  }

  .profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 60%;
  }

  .big-line {
    width: 100%;
    height: 12px;
    background: #262626;
    border-radius: 8px;
    position: relative;
  }

  /* SHIMMER */
  div::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.06) 50%,
      rgba(255,255,255,0) 100%
    );
    animation: shimmer 1.3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;