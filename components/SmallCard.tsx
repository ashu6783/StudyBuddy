import CustomCard from './reusables/CustomCard';

interface SmallCardProps {
  title: string;
  content: string;
  wordCount: number;
  pageCount: number;
  onClick: () => void;
}

const SmallCard = ({
  title,
  content,
  wordCount,
  pageCount,
  onClick,
}: SmallCardProps) => {
  return (
    <div className="flex justify-center">
      <CustomCard
        title={title}
        content={content}
        wordCount={wordCount}
        pageCount={pageCount}
        variant="default"
        onClick={onClick}
      />
    </div>
  );
};

export default SmallCard;
