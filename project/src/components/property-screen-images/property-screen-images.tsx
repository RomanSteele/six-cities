

type PropertyScreenImagesProps = {
  pictures: [string];
};


function PropertyScreenImages({ pictures }: PropertyScreenImagesProps) {

  const picturesToRender = pictures.slice(0, 6);

  return (
    <>
      {picturesToRender.map((item) => (
        <div className="property__image-wrapper" key={item.concat('id')}>
          <img className="property__image" src={item} alt="Pic studio" />
        </div>
      ))}
    </>
  );
}
export default PropertyScreenImages;
