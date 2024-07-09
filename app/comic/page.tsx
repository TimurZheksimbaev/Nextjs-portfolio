import ComicAPI from './ComicAPI';
import '../../styles/Comic.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ComicData from './ComicModel';

const email: string = 't.zheksimbaev@innopolis.university';

async function getComicData(email: string): Promise<ComicData> {
  const comic = new ComicAPI()
  const data = await comic.getComicData(email)
  dayjs.extend(relativeTime);
  const date = new Date(data.year, data.month - 1, data.day);
  data.date = dayjs(date).toDate().toLocaleDateString()
  return data
}

async function Comic() {
  const comicData = await getComicData(email)

  return (
    <div className="comic-container">
      <h2>{comicData ? comicData.safe_title : 'Loading...'}</h2>
      <p>{comicData ? comicData.date : 'Loading...'}</p>
      <img src={comicData?.img!} alt={comicData?.alt!} />
    </div>
  );
}

export default Comic;