import React ,{useState}from 'react';

const Progress = () => {
    const [process, setProcess] = useState(false)
    const handleProgress = () => {

    }
    return (
        <div>
            <button onClick={handleProgress}>В процессе</button>

        </div>
    );
};

export default Progress;