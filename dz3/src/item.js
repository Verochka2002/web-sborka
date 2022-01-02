export function drawGalleryItem(item) {
    const itemElement = document.createElement('div');
    itemElement.classList = "gallery-item"

    const resourceElement = document.createElement('div')
    resourceElement.classList = 'gallery-item__resorce'
    if (item.type === 'image') {
        const imgElement = document.createElement('img')
        imgElement.classList = "gallery-item__img"
        imgElement.src = item.resourсe

        resourceElement.appendChild(imgElement)
    }
    if (item.type === 'audio') {
        const audioElement = document.createElement('audio')
        audioElement.classList = "gallery-item__audio"
        audioElement.src = item.resourсe
        audioElement.controls = true

        resourceElement.appendChild(audioElement)
    }
    if (item.type === 'video') {
        const videoElement = document.createElement('video')
        videoElement.classList = "gallery-item__video"
        videoElement.src = item.resourсe
        videoElement.controls = true

        resourceElement.appendChild(videoElement)
    }

    const titleElement = document.createElement('span')
    titleElement.classList = "gallery-item__title"
    titleElement.textContent = item.title

    itemElement.appendChild(resourceElement)
    itemElement.appendChild(titleElement)

    return itemElement
}