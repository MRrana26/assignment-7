import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { HashLoader } from 'react-spinners';

const FriendDetail = () => {
    const { id } = useParams();

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            setFriends(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const expectFriend = friends.find((frnd) => String(frnd.id) === id);

    return (
        <>
            {loading ? <div className='flex justify-center items-center min-h-[200px]'><HashLoader color='#244D3F' /></div> :
                expectFriend && (
                    <div>
                        <div>
                            <div className='flex justify-center items-center'>
                                <img src={expectFriend.picture} alt="my friends image" className="w-20 h-20 object-cover object-center rounded-full" />
                            </div>
                            <h1 className='text-xl font-bold mt-2 text-[#244D3F] text-center'>{expectFriend.name}</h1>
                            <div className='flex justify-center my-2'>
                                {
                                    expectFriend.tags.map((tag, index) => (
                                        <span key={index} className='uppercase font-semibold bg-[#CBFADB] px-3 py-1.5 rounded-full mx-1 text-[10px]'>
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>

                            <div className='text-center space-y-1'>
                                <p>{expectFriend.email}</p>
                                <p>{expectFriend.days_since_contact}</p>
                                <p>{expectFriend.status}</p>
                                <p>{expectFriend.bio}</p>
                                <p>{expectFriend.goal}</p>
                                <p>{expectFriend.next_due_date}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default FriendDetail;