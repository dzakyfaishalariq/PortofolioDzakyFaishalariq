export function generatePaginationPages(current: number, total: number): (number|string)[]{
      // Jika total halaman sedikit, tampilkan semua angka langsung
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | string)[] = []

  // Halaman pertama selalu muncul
  pages.push(1)

  if (current <= 4) {
    // Jika berada di halaman awal
    pages.push(2, 3, 4, 5)
    pages.push("...")
    pages.push(total)
  } else if (current >= total - 3) {
    // Jika berada di halaman akhir
    pages.push("...")
    pages.push(total - 4, total - 3, total - 2, total - 1)
    pages.push(total)
  } else {
    // Jika berada di tengah-tengah
    pages.push("...")
    pages.push(current - 1, current, current + 1)
    pages.push("...")
    pages.push(total)
  }

  return pages
}