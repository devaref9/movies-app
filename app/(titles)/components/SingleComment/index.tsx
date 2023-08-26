
import moment from 'jalali-moment'

const SingleComment = ({ comment }: any) => {
  return (
    <div className="bg-[#181818] w-[90%] mx-auto p-4 rounded-lg relative before:absolute before:content[''] before:right-0 before:top-2 before:bottom-2 before:rounded-md before:w-1 before:bg-primary">
      <p className="text-sm font-medium text-gray-400">{moment(comment.createdAt).locale('fa').format('LLLL')}</p>
      <p className="text-base font-medium mt-1">{comment.text}</p>
    </div>
  );
};

export default SingleComment;
