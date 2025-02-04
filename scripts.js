document.addEventListener('DOMContentLoaded', () => {
    const itinerary = {
        activeDay: 'day1',
        showSection2: false,
        setActiveDay(day) {
            if (this.activeDay === day) {
                document.querySelector(`.day-content[data-day="${day}"]`).scrollTo(0, 0);
                return;
            }
            this.activeDay = day;
            document.querySelectorAll('.day-content').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelector(`.day-content[data-day="${day}"]`).classList.add('active');
            document.querySelectorAll('.nav-buttons button').forEach(button => {
                button.classList.remove('active');
            });
            document.querySelector(`.nav-buttons button[data-day="${day}"]`).classList.add('active');
            document.querySelector('.content-area').style.backgroundImage = `url('images/${day.slice(-1)}/bg.jpg')`;
            document.querySelector(`.day-content[data-day="${day}"]`).scrollTo(0, 0); // Scroll to top
        },
        startItinerary() {
            this.showSection2 = true;
            const goButton = document.querySelector('.go-button');
            goButton.classList.add('active');
            setTimeout(() => {
                goButton.style.display = 'none';
                document.querySelector('.section1').classList.add('hide');
                setTimeout(() => {
                    document.querySelector('.section1').style.display = 'none';
                    document.querySelector('.section2').style.display = 'flex';
                    this.setActiveDay(this.activeDay);
                }, 1000); // 延遲以允許過渡
            }, 500); // 延遲以允許按鈕動畫
        }
    };

    document.querySelector('.go-button').addEventListener('click', () => itinerary.startItinerary());
    document.querySelectorAll('.nav-buttons button').forEach(button => {
        button.addEventListener('click', () => itinerary.setActiveDay(button.dataset.day));
    });

    // 初始化
    document.querySelector('.section2').style.display = 'none';
    document.querySelector(`.nav-buttons button[data-day="day1"]`).classList.add('active');
    document.querySelector(`.day-content[data-day="day1"]`).classList.add('active');
    document.querySelector('.content-area').style.backgroundImage = "url('images/1/bg.jpg')";

    // Smooth scrolling for itinerary links
    document.querySelectorAll('.page-description a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});