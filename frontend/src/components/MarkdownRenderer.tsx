interface MarkdownRendererProps {
    content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    const renderContent = () => {
        const parts: React.ReactNode[] = [];
        const lines = content.split('\n');
        
        let textBuffer = '';
        let keyCounter = 0;

        const flushTextBuffer = () => {
            if (textBuffer.trim()) {
                parts.push(
                    <p key={`text-${keyCounter++}`} className="text-gray-300 mb-4 leading-relaxed whitespace-pre-wrap">
                        {textBuffer}
                    </p>
                );
                textBuffer = '';
            }
        };

        lines.forEach((line) => {
            // Check for image markdown: ![alt](url)
            const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
            const match = line.match(imageRegex);
            
            if (match) {
                // Flush any accumulated text before the image
                flushTextBuffer();
                
                const [, alt, url] = match;
                parts.push(
                    <div key={`img-${keyCounter++}`} className="my-6">
                        <img
                            src={url}
                            alt={alt || "Blog image"}
                            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                            onError={(e) => {
                                // Handle broken images
                                e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
                            }}
                        />
                    </div>
                );
            } else {
                // Accumulate text
                textBuffer += line + '\n';
            }
        });

        // Flush any remaining text
        flushTextBuffer();

        return parts;
    };

    return <div className="prose prose-invert max-w-none">{renderContent()}</div>;
}