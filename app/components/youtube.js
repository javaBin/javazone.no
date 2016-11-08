const styles = {
    maxWidth: '100%',
    width: '100%'
};

export default ({id}) => (
    <iframe style={styles} width="100%" height="675" src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0`} frameBorder="0" allowFullScreen></iframe>
);