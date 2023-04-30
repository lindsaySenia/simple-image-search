function SearchBar({ onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit('ocean');

    }

    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input />
        </form>
    </div>
    );
    
};

export default SearchBar;