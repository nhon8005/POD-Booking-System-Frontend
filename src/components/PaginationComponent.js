import React from "react";

export default function PaginationComponent() {
    // Thay thế các giá trị dịch và số bằng giá trị tĩnh hoặc tính toán khác
    const t = (text) => text; // Giả định hàm t để trả về text gốc
    const n = (number) => number; // Giả định hàm n để trả về số gốc

    // Nếu bạn không cần `currentLanguage?.dir`, có thể mặc định hướng là "ltr"
    const direction = "ltr"; // Hoặc bạn có thể thay đổi thành "rtl" nếu cần

    return (
        <div className="mc-paginate">
            <p className="mc-paginate-title">
                {t('showing')} 
                <b> {n(12)} </b> 
                {t('of')} 
                <b> {n(60)} </b> 
                {t('results')}
            </p>
            <ul className="mc-paginate-list">
                <li className="mc-paginate-item">
                    { direction === "ltr" ? 
                        <i className="material-icons">chevron_left</i> 
                        : <i className="material-icons">chevron_right</i>
                    }
                </li>
                <li className="mc-paginate-item active">{n(1)}</li>
                <li className="mc-paginate-item">{n(2)}</li>
                <li className="mc-paginate-item">{n(3)}</li>
                <li className="mc-paginate-item">...</li>
                <li className="mc-paginate-item">{n(45)}</li>
                <li className="mc-paginate-item">
                    { direction === "ltr" ? 
                        <i className="material-icons">chevron_right</i> 
                        : <i className="material-icons">chevron_left</i>
                    }
                </li>
            </ul>
        </div>
    );
}
