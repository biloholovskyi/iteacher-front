import React, {Component} from "react";
import LessonItem from '../singleLesson/mainContent/lessonItem';

//styled
import {BlockWrap} from './styled'


export default class InnerMainBlock extends Component {

  render() {
    return(
      <BlockWrap>
        <div className="desc">
          <div className="title__block">
            Read the text and select true or false
          </div>
          <div className="section">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero orci, auctor non imperdiet ac, vehicula vel libero. Donec dignissim tristique eleifend. Suspendisse vitae mi a mauris semper venenatis eu at justo. Aliquam erat volutpat. Duis fringilla erat vitae tortor rhoncus sodales. Ut sit amet sem porttitor lectus egestas placerat. Nullam pellentesque non lectus ut tempor. Aliquam vel nunc ipsum. Fusce fermentum posuere augue. Nunc faucibus, ante a pulvinar lobortis, lectus ligula bibendum urna, nec fermentum velit dolor at tortor. Donec fermentum tincidunt purus sed ultricies. Proin in aliquet nibh. Integer pharetra faucibus tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ultricies, mi in tincidunt vehicula, risus dui auctor nisl, at posuere sem sem et felis.</p>
            <div className="selectBlock">
              <div className="selectItem">
                <div className={'info'}>
                  <div className="num">1.</div>
                  <div className="desc">Cras libero orci, auctor non imperdiet ac, vehicula vel libero?</div>
                </div>
                <LessonItem/>
              </div>
              <div className="selectItem">
                <div className={'info'}>
                  <div className="num">2.</div>
                  <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
                </div>
                <LessonItem/>
              </div>
              <div className="selectItem">
                <div className={'info'}>
                  <div className="num">3.</div>
                  <div className="desc">Donec dignissim tristique eleifend</div>
                </div>
                <LessonItem/>
              </div>
            </div>
          </div>
          <button
            className={'finish'}
          >Закончить задание</button>
        </div>
      </BlockWrap>
    )
  }
}