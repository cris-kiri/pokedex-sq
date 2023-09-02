import styles from './LoadingPokeball.module.css'

export default function LoadingPokeball() {
  return (
    <div
      className={styles.pokeball}
      aria-label="Loading..."
      aria-busy="true"
      aria-live="polite"
    />
  )
}
