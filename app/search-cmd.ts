export const initializeCommandK = (): void => {
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.metaKey && event.key === "k") {
      event.preventDefault()
      const searchButton = document.querySelector<HTMLButtonElement>(
        '[data-framer-name="Search Container"] button',
      )
      if (searchButton) searchButton.click()
    }
  })
}

export default initializeCommandK
