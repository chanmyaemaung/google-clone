import Head from 'next/head';
import Header from '../components/Header';
// import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';
// console.log(results);

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

function Search({ results }) {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
			</Head>
			{/* Header */}
			<Header />
			{/* Search Result */}
			<SearchResults results={results} />
		</div>
	);
}

export default Search;

export async function getServerSideProps(context) {
	const useDummyData = false; // Mock Data
	const startIndex = context.query.start || '0'; // Pagination

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&${startIndex}`
		  ).then((response) => response.json());

	// After the SERVER  has rendered... Pass the results to the client
	return {
		props: {
			results: data,
		},
	};
}
