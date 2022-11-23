import Galleryitem from './GalleryItem';

function Gallery(props) {
  const display = props.data.map((item, index) => {
    return (
      <Galleryitem item={item} key={index}/>
    )
  })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery