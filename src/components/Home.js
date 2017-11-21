import React, {Component} from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: [
                {
                    id:'1',
                    name: 'Đấu Trường Sinh Tử',
                    src: 'dau-truong-sinh-tu',
                    author: 'Suzanne Collins',
                    summary: 'Đấu trường sinh tử kể lại câu chuyện của Katniss Everdeen, một cô gái 16 tuổi từ Quận 12 đã tình nguyện làm vật tế cho Đấu trường sinh tử lần thứ 74 để thay thế cho người em gái của mình là Prim. Cùng tham gia với cô từ Quận 12 là Peeta Mellark, một chàng trai đã yêu Katniss từ khi cậu gặp cô lúc nhỏ. Họ được hướng dẫn bởi người chiến thắng duy nhất còn sống ở quận 12, Haymitch Abernathy, người giành chiến thắng trò chơi 24 năm trước và từ đó giả định với một cuộc sống đơn độc của rượu. Peeta thú nhận tình yêu của mình cho Katniss trong một cuộc phỏng vấn truyền hình trước khi trò chơi bắt đầu, làm cho Capitol miêu tả Katniss và Peeta là "star-crossed lovers.'
                },
                {
                    id:'2', 
                    name: 'Bắt Lửa',
                    src: 'bat-lua',
                    author: 'Suzanne Collins',
                    summary: 'Trong Bắt lửa, Katniss biết được rằng Capitol đang tức giận đối với cô vì đã công khai chống đối trong quyển trước, một hành động đã gây ra một phản ứng dây chuyền, khiến các quận nổi dậy chống lại Capitol.Trong cuộc thi đặc biệt lần thứ 75, được gọi là Quarter Quell, Katniss và Peeta lại bị bắt buộc tham gia một lần nữa, cùng với những người thắng cuộc trong những cuộc thi trước. Họ liên kết với một số vật tế khác, phá hủy đấu trường và thoát khỏi cuộc chơi. Katniss được đưa đến Quận 13, một nơi mà người ta cứ tưởng là không còn tồn tại, trong khi Peeta bị Capitol bắt giữ, và Quận 12 thì bị phá hủy.'
                },
                        {
                    id:'3', 
                    name: 'Húng Nhại', 
                    src: 'hung-nhai', 
                    author: 'Suzanne Collins',
                    summary: 'Húng Nhại, quyển sách thứ ba và cuối cùng, thuật lại cuộc nổi dậy của Katniss và các quận chống lại Capitol. Katniss, nay là một người tị nạn trong Quận 13 và đã bị tổn thương về thể chất lẫn tinh thần qua những việc đã xảy ra, được phe nổi dậy dùng làm công cụ tuyên truyền để kêu gọi các quận đoàn kết chống lại Capitol và Tổng thống Snow. Peeta và một số người khác đang bị Capitol giam giữ được giải cứu sau đó bởi những người tình nguyện từ quận 13, trong đó có Gale. Tưởng như giải cứu là xong nhưng Peeta bị bắt hồn và trở nên loạn trí. Cuối cùng, một nhóm gồm có Katniss, Cressida, Pollux, Gale, và Peeta (đang có tinh thần không ổn định) tự ý làm một sứ mệnh vào thẳng Capitol để ám sát Tổng thống Snow. Trước khi Katniss hoàn thành nhiệm vụ, Prim tử nạn trong một cuộc đánh bom nhắm vào những người cứu hộ phe nổi dậy. Sau đó, Snow, nay đang bị bắt giữ chờ hành quyết, cho Katniss biết rằng chính Coin, người lãnh đạo của Quận 13, mới là người đứng sau vụ đánh bom này. Katniss giương cung bắn chết Coin. Katniss, Peeta, và Haymitch cuối cùng trở về Quận 12 và cùng xây dựng lại quận này. Katniss dần dần bình phục, mẹ cô và Gale đều làm việc ở những quận khác. Katniss cuối cùng cũng yêu Peeta thật lòng.'
                },
                {
                    id:'4', 
                    name: 'Thám tử lừng danh Conan',
                    src: 'conan1',
                    author: 'Aoyama Gosho',
                    summary: 'Kudo Shinichi là một thám tử trung học rất nổi tiếng, thường xuyên giúp cảnh sát phá giải các vụ án khó khăn. Trong một lần khi đang điều tra, cậu bị thành viên của Tổ chức Áo đen phát hiện. Chúng cho cậu uống thử loại thuốc teo nhỏ (APTX 4869) tổ chức vừa điều chế ra nhưng chất độc này không giết chết cậu mà khiến cơ thể cậu trở thành hình dạng một đứa trẻ. Sau đó, cậu đổi tên thành Edogawa Conan sống tại nhà thám tử Mori Kogoro. Xuyên suốt xê-ri cậu âm thầm hỗ trợ phá các vụ án bên cạnh ông Mori. Đồng thời cậu cũng phải đi học lại tiểu học, kết bạn được nhiều người và lập ra Đội thám tử nhí.'
                },
                {
                    id:'5', 
                    name: 'Thám tử lừng danh Conan', 
                    src: 'conan2', 
                    author: 'Aoyama Gosho',
                    summary: 'Kudo Shinichi là một thám tử trung học rất nổi tiếng, thường xuyên giúp cảnh sát phá giải các vụ án khó khăn. Trong một lần khi đang điều tra, cậu bị thành viên của Tổ chức Áo đen phát hiện. Chúng cho cậu uống thử loại thuốc teo nhỏ (APTX 4869) tổ chức vừa điều chế ra nhưng chất độc này không giết chết cậu mà khiến cơ thể cậu trở thành hình dạng một đứa trẻ. Sau đó, cậu đổi tên thành Edogawa Conan sống tại nhà thám tử Mori Kogoro. Xuyên suốt xê-ri cậu âm thầm hỗ trợ phá các vụ án bên cạnh ông Mori. Đồng thời cậu cũng phải đi học lại tiểu học, kết bạn được nhiều người và lập ra Đội thám tử nhí.'
                }, 
                {
                    id:'6', 
                    name: 'Thám tử lừng danh Conan',
                    src: 'conan3',
                    author: 'Aoyama Gosho',
                    summary: 'Kudo Shinichi là một thám tử trung học rất nổi tiếng, thường xuyên giúp cảnh sát phá giải các vụ án khó khăn. Trong một lần khi đang điều tra, cậu bị thành viên của Tổ chức Áo đen phát hiện. Chúng cho cậu uống thử loại thuốc teo nhỏ (APTX 4869) tổ chức vừa điều chế ra nhưng chất độc này không giết chết cậu mà khiến cơ thể cậu trở thành hình dạng một đứa trẻ. Sau đó, cậu đổi tên thành Edogawa Conan sống tại nhà thám tử Mori Kogoro. Xuyên suốt xê-ri cậu âm thầm hỗ trợ phá các vụ án bên cạnh ông Mori. Đồng thời cậu cũng phải đi học lại tiểu học, kết bạn được nhiều người và lập ra Đội thám tử nhí.'
                },
                {
                    id:'7', 
                    name: 'Another',
                    src: 'another',
                    author: 'Yukito Ayatsuji',
                    summary: 'Another (アナザー) là loạt tiểu thuyết thuộc thể loại kinh dị và huyền bí được viết bởi Ayatsuji Yukito và Kadokawa Shoten đã đăng trên tạp chí Yasai Jidai của mình từ tháng 8 năm 2006 đến tháng 5 năm 2009. Cốt truyện xoay quanh Sakakibara Kōichi một nam sinh vừa chuyển đến trường trung học Yomiyama và cậu đã gặp một cô gái bí ẩn tên Misaki Mei người mà vì lý do nào đó mọi người xung quanh xem là không tồn tại. Kōichi bắt đầu nhận ra không khí kỳ lạ của lớp học mà cậu được chuyển đến mà mọi người đều tránh nói đến vì các học sinh trong lớp này luôn là nạn nhân của những tai nạn thảm khốc bắt đầu từ năm 1973 sau một tai nạn của một học sinh trong lớp, vì thế Kōichi và Mei bắt đầu tìm hiểu cũng như tìm cách ngăn chặn hiện tượng kỳ bí này trước khi đến lượt mình là nạn nhân.'
                }
            ]
        }
    }
    createList() {
    let listBooks = this.state.name.map(
        (eachBook) => {
            return (
              <div className='book-ctn' key={eachBook.id}>
                <div className="book-item">
                  <div className="header">
                    <h1>{eachBook.name}</h1>
                  </div>
                  <div className='body'>
                   <h3>Tác giả: {eachBook.author}</h3>
                  </div>
                  <img src={"images/" + eachBook.src + ".jpg"} alt='book'/>
                </div>
              </div>
            );
        }
    );
    return listBooks;
    }
    render() {
        return (
          <div>
            <h2 className='text-center'>Danh sách Sách</h2>
            <div className='list-book'>
              {this.createList()}
            </div>
          </div>
        );
    }
}

export default Home;