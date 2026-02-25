import Image from 'next/image';

export default function CardImage({ cardId, alt, size = 64, className = '' }) {
    const width = size;
    const height = size * 1.2;

    return (
        <div className={`relative flex-shrink-0 ${className}`} style={{ width, height }}>
            <Image
                src={`https://cdn.royaleapi.com/static/img/cards-150/${cardId}.png`}
                alt={alt || cardId}
                fill
                sizes={`${size}px`}
                className="object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-110 hover:z-10"
                unoptimized
            />
        </div>
    );
}
