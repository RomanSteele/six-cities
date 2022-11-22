

type PropertyScreenInsideListProps = {
  goods: [string];
};


function PropertyScreenInsideList({ goods }: PropertyScreenInsideListProps) {


  return (
    <>
      {goods.map((item) => (
        <li className="property__inside-item" key={item.concat('ID')}>
          {item}
        </li>
      ))}
    </>
  );
}
export default PropertyScreenInsideList;
