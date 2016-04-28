const styles = {
    maxWidth: '560px',
    width: '100%'
};

export default ({id}) => (
    <iframe style={styles} width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allowfullscreen></iframe>
);