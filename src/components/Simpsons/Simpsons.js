import {Simpson} from "./Simpson";

const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'HOMER',
            age: 39,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, labore!',
            image: 'https://i.pinimg.com/564x/2c/3c/10/2c3c10ea8b277481e07b99d49ef10668.jpg'
        },
        {
            id: 2,
            name: 'MARGE',
            age: 25,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloremque error facere nobis quisquam, sapiente.',
            image: 'https://toleranten.files.wordpress.com/2011/03/original.jpg'
        },
        {
            id: 3,
            name: 'HOUTEN',
            age: 15,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim excepturi fugiat, harum ipsam modi quam quidem repudiandae temporibus. Modi.',
            image: 'https://i.pinimg.com/736x/f9/c7/d1/f9c7d1835329d7344081b3addefdf088.jpg'
        },
        {
            id: 4,
            name: 'ABRAHAM',
            age: 75,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacKHyGuVTdyGB80W0tl7p6j2eeWJKwm954HU592kjkkGpNp5NC-U-YZPTYu60elcLehE&usqp=CAU'
        },
        {
            id: 5,
            name: 'BARNEY',
            age: 28,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, itaque, quaerat.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/d/de/Barney_Gumble.png'
        },
        {
            id: 6,
            name: 'LISA',
            age: 13,
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem fugiat pariatur voluptate?',
            image: 'https://slovnet.ru/wp-content/uploads/2018/12/2-61.jpg'
        }
    ];

    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};