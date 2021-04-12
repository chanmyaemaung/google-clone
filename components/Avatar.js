function Avatar({ url, className }) {
  return (
    <img
      loading='lazy'
      src={url}
      alt='Profile Picture'
      className={`h-10 rounded-full cursor-pointer hover:scale-150 transition duration-150 transform  ${className}`}
    />
  );
}

export default Avatar;
