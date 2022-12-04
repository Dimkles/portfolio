import React, { Dispatch, FC, SetStateAction } from 'react';
import './ScrollbarAdminPanel.scss'


interface ScrollbarAdminPanelProps {
    SetContentActive: Dispatch<SetStateAction<string>>
    contentActive: string
}

const ScrollbarAdminPanel: FC<ScrollbarAdminPanelProps> = ({ contentActive, SetContentActive }) => {
    return (
        <div className="scrollbarAdminPanel">
            <nav className="menuScrollbar">
                <ul className="menuScrollbar__list">
                    <li className={contentActive === 'projects' ? "menuScrollbar__item active" : "menuScrollbar__item"}>
                        <button onClick={() => SetContentActive('projects')} className="menuScrollbar__btn">
                            Проекты
                        </button>
                    </li>
                    <li className={contentActive === 'technologies' ? "menuScrollbar__item active" : "menuScrollbar__item"}>
                        <button onClick={() => SetContentActive('technologies')} className="menuScrollbar__btn">
                            Технологии
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default ScrollbarAdminPanel;