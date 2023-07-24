export default function Avatar({ image, isNew }) {
  return (
    <div className="photo">
      <img src={image} alt="avatar" />
      {isNew && <span className="new">NEW</span>}
    </div>
  );
}
