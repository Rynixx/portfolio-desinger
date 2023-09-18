export default function Gallery() {
    return (
    <div className="flex flex-wrap gap-4">
      {this.props.images.map((imagePath, index) => (
        <div key={index} className="w-1/3 p-2 shadow-md rounded">
          <img src={imagePath} alt={`gallery-item-${index}`} className="w-full h-auto"/>
        </div>
      ))}
    </div>
  );
      }