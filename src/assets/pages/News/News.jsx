import data from './news.json'
import './News.scss'
import { Link } from 'react-router-dom'
import '/src/open.scss'

function News() {
    const articles = [];
    for (let i = 0; i < data.length; i++) {
        articles.push(
            <article key={i}>
                <Link to={data[i].uuid}>
                    <h2>{data[i].title}</h2>
                    <img src={'/news/' + data[i].imagelocation} alt={''}/>
                </Link>
            </article>
        );
    }
    return (
        <div className={'main-container'}>
            {articles}
        </div>
    );
}

export default News
