import { product } from "@/content"

export function ProductPage() {
  return (
    <section className="section section-hero">
      <div className="section-inner animate-rise">
        <p className="section-label">Product</p>
        <h1 className="section-title">{product.name}</h1>
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
