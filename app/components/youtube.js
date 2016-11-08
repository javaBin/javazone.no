export default ({id}) => (
    <iframe className='youtube' src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0`} frameBorder="0" allowFullScreen></iframe>
);
