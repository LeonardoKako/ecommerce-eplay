import { TagContainer } from './style'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

export const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)
