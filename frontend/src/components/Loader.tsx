import styled from "styled-components";

interface LoaderProps {
  variant?: "list" | "followers" | "profile" | "table-row";
}

const Loader = ({ variant = "list" }: LoaderProps) => {
  return (
    <StyledSkeleton variant={variant}>
      {variant === "profile" && (
        <div className="profile-container-load">
          {/* Header Skeleton */}
          <div className="flex-row-load mb-12">
            <div className="avatar-square-load" />
            <div className="info-block-load">
              <div className="line-heavy-load mb-4" />
              <div className="line-med-load mb-4" />
              <div className="line-small-load" />
            </div>
          </div>
          {/* Stats Grid Skeleton */}
          <div className="grid-load">
            <div className="stat-box-load" />
            <div className="stat-box-load" />
            <div className="stat-box-load" />
            <div className="stat-box-load" />
          </div>
          {/* Remarks Block */}
          <div className="remarks-load" />
        </div>
      )}

      {variant === "list" && (
        <div className="flex-row-load p-4">
          <div className="avatar-med-load" />
          <div className="lines-stack-load">
            <div className="line-med-load" />
            <div className="line-small-load" />
          </div>
        </div>
      )}

      {variant === "table-row" && (
        <div className="table-row-grid-load">
           <div className="cell-load" />
           <div className="cell-load" />
           <div className="cell-load" />
           <div className="cell-load" />
        </div>
      )}
    </StyledSkeleton>
  );
};

export default Loader;

const StyledSkeleton = styled.div<{ variant: string }>`
  width: 100%;
  max-width: ${({ variant }) => (variant === "profile" ? "1000px" : "100%")};
  background: transparent;
  
  /* Shared Animation Background */
  .avatar-square-load, .avatar-med-load, .line-heavy-load, 
  .line-med-load, .line-small-load, .stat-box-load, 
  .remarks-load, .cell-load {
    background: #f3f4f6; /* Gray-100 */
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.6) 50%,
        rgba(255,255,255,0) 100%
      );
      animation: shimmer 1.5s infinite;
    }
  }

  /* Profile Variant Layout */
  .profile-container-load {
    padding: 40px;
    background: white;
    border: 1px solid #f3f4f6;
    border-radius: 2rem;
  }

  .flex-row-load {
    display: flex;
    gap: 40px;
    align-items: flex-start;
  }

  .avatar-square-load {
    width: 160px;
    height: 160px;
    border-radius: 24px;
    flex-shrink: 0;
  }

  .info-block-load {
    flex: 1;
    padding-top: 10px;
  }

  .line-heavy-load { width: 60%; height: 32px; border-radius: 8px; }
  .line-med-load { width: 40%; height: 18px; border-radius: 6px; }
  .line-small-load { width: 30%; height: 14px; border-radius: 4px; }

  .grid-load {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 40px;
  }

  .stat-box-load {
    height: 100px;
    border-radius: 20px;
  }

  .remarks-load {
    height: 120px;
    width: 100%;
    border-radius: 20px;
  }

  /* List / Table Variants */
  .avatar-med-load { width: 48px; height: 48px; border-radius: 12px; }
  .lines-stack-load { display: flex; flex-direction: column; gap: 8px; flex: 1; }
  
  .table-row-grid-load {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    gap: 20px;
    padding: 20px;
    border-bottom: 1px solid #f3f4f6;
  }
  .cell-load { height: 16px; }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* Utilities */
  .mb-12 { margin-bottom: 3rem; }
  .mb-4 { margin-bottom: 1rem; }
`;