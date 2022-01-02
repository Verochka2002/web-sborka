import('./style.scss')
import items from './items'
import { drawGalleryItem } from './item'

const galleryItems = document.getElementById('gallery')

items.map(item => galleryItems.appendChild(drawGalleryItem(item)))