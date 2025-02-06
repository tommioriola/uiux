import type React from "react"
import styles from "./foil-text.module.css"

interface FoilTextProps {
  children: React.ReactNode
  isMyProduct: boolean
}

export function FoilText({ children, isMyProduct }: FoilTextProps) {
  return <span className={isMyProduct ? styles.myProduct : styles.competitor}>{children}</span>
}

