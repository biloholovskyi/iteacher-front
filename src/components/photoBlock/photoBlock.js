import React, {useState} from "react";

import * as Style from "./style";

const PhotoBlock = () => {
  // preview
  const [photo, setPhoto] = useState({})

  // изминение фото
  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setPhoto({file, preview: reader.result})
    }
    reader.readAsDataURL(file)
  }

  // // очищаем инпут с фото
  const handleRemove = () => {
    setPhoto({
      file: ''
    });
  };

  // render preview
  const renderPreview = JSON.stringify(photo) === JSON.stringify({}) ? (
    <Style.Photo forHtml={'photo-user'}>
      <input
        accept="image/*"
        className={'hidden-input'}
        name={'photo'}
        id={'photo-user'}
        onChange={(e) => handleImageChange(e)}
        type={'file'}
        required={false}
      />
      <div className="preview"/>
      <div className="text">
        <div className="title">Выберите фото</div>
        <div className="format">.PNG или .JPG до 4 мб</div>
      </div>
      <Style.Button>Загрузить с компьютера</Style.Button>
    </Style.Photo>
  ) : (
    <>
      <Style.Photo forHtml={'photo-user'}>
        <input
          accept="image/*"
          className={'hidden-input'}
          name={'photo'}
          id={'photo-user'}
          onChange={(e) => handleImageChange(e)}
          type={'file'}
          required={false}
        />

        {
          photo.file === ''
            ? <div className="preview"/>
            : <img alt={'preview'} src={photo.preview}/>
        }

        <div className="text">

          {
            photo.file === ''
              ? <>
                  <div className="title">Выберите фото</div>
                  <div className="format">.PNG или .JPG до 4 мб</div>
                </>
              : <div className={'title'}>Фото загружено!</div>
          }

        </div>

        {
          photo.file === ''
            ? <Style.Button>Загрузить с компьютера</Style.Button>
            : <Style.Button>Заменить</Style.Button>
        }

      </Style.Photo>

      {
        photo.file !== '' && (
          <Style.ButtonRed type={'button'} onClick={() => handleRemove()}>Удалить</Style.ButtonRed>
        )
      }

    </>
  )

  return (
    <Style.Wrapper forHtml={'photo-user'}>

      {renderPreview}

    </Style.Wrapper>
  )
}

export default PhotoBlock;