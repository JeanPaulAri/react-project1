import React from 'react';

function  Commentary(){
    return(
        <div  className='container_img'>
            <img
                className='img_commentary'
                src={require('../images/testimonio-emma.png')}
                alt='Emma photo'
            />
            <div className='container_text'>
                <p className='name_comment'>Emma Bostian de Suecia</p>
                <p className='jobPosition_comment'>Ingeniera de Software en Spotify</p>
                <p className='text_comment'>
                    'Siempre he tenido problemas para aprender JavaScript. He tomado
                    muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
                    Estudiar JavaScript, así como estructuras de datos y algoritmos
                    en freeCodeCamp me dio las habilidades y la confianza que
                    necesitaba para conseguir el trabajo de mis sueños como
                    ingeniero de software en Spotify.'
                </p>
            </div>
        </div>
    );
}

export default Commentary;