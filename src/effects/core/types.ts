export type EffectOptions = {
  preview?: boolean
}

export type EffectMount = (
  container: HTMLElement,
  options?: EffectOptions
) => () => void

export type EffectEntry = {
  slug: string
  title: string
  titleJa: string
  description: string
  tags: string[]
  mount: EffectMount
  featured?: boolean
}
