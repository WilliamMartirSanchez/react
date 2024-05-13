const user = {
  name: 'William Màrtir',
  imageUrl: 'https://img.freepik.com/fotos-premium/diario-gatos-fotos-cautivadoras-amantes-gatitos_563241-4057.jpg',
  imageSize: 180,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
