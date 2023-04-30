function SearchBar({ onSubmit }) {
    const handleClick = () => {
        onSubmit('ocean');
    };
    return <div>
        <input />
        <button onClick={handleClick}>Click me</button>
    </div>;

    
};

export default SearchBar;