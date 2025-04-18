addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // URL GitHub Codespace Anda
  const codespaceUrl = 'https://fuzzy-couscous-v6p7wgq6qr9xcw5qx.github.dev'

  // Kirimkan permintaan GET ke Codespace untuk menjaga tetap aktif
  try {
    const response = await fetch(codespaceUrl, { method: 'GET' })
    if (response.ok) {
      return new Response('Codespace tetap aktif', { status: 200 })
    } else {
      return new Response('Gagal mengakses Codespace', { status: 500 })
    }
  } catch (error) {
    return new Response('Terjadi kesalahan: ' + error.message, { status: 500 })
  }
}
