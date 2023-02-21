export default function Category({ category: { id, title, image } }) {
  return (
    <div className="flex-col text-sm mb-6 hover:bg-brand-gray rounded  text-brand-primary-gray hover:text-primary-brand-color w-[108px] h-[108px] flex justify-center items-center cursor-pointer">
      <img
        className="h-12 w-12 border-2 rounded-lg mx-auto "
        src={image}
        alt={title}
      />
      <span className="mt-2 font-semibold mx-auto">{title}</span>
    </div>
  );
}
