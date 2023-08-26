import { useState } from "react";
import './search.scss';

interface Props {
    searchHandler: (query: string) => void
}

export default function Search(props: Props) {

    const [query, setQuery] = useState('');
    const changeHandler = (e: any) => {
        setQuery((s) => e.target.value)
        props.searchHandler(e.target.value as string)
    }
    return (
        <input type="text"
                value={query}
                placeholder="Please enter search query"
                onChange={(e) => changeHandler(e)}
                className="search-field">

        </input>
    );
}