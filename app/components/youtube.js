const styles = {
    maxWidth: '560px',
    width: '100%'
};

export default ({id}) => (
    <iframe style={styles} width="560" height="315" src={`https://www.youtube.com/embed/${id}?rel=0&showinfo=0`} frameborder="0" allowfullscreen></iframe>
);