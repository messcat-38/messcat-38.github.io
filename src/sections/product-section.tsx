import { product } from "@/content"

export function ProductSection() {
  return (
    <section id="product" className="section">
      <div className="section-inner animate-rise-delay">
        <p className="section-label">Product</p>
        <h2 className="section-title">{product.name}</h2>
        <p className="section-copy">{product.description}</p>
        <div className="mt-10 max-w-xl">
          <img
            src={product.image.src}
            alt={product.image.alt}
            className="h-auto w-full max-w-md object-contain"
            width={product.image.width}
            height={product.image.height}
          />
        </div>
      </div>
    </section>
  )
}
