import QuoteList from "../components/qoutes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Maximilian', text: 'Learning React is great!'},
];

const AllQuotes = () =>{
    return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;