import Card from './Card';
import ITitle from '../../../Types/ITitle';

type Props = {
  titles: Array<ITitle>;
};

const ListCard = ({ titles }: Props) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {titles.map((title) => (
        <Card
          key={title.id} 
          id={title.id}
          cover={title.backdrop_path}
          title={title.title}
          percentage={Math.floor(title.vote_average*10)}
          type={title.media_type}
          style={{ 
            flexBasis: 'calc(20% - 1rem)'
          }} 
        />
      ))}
    </ul>
  );
};

export default ListCard;
