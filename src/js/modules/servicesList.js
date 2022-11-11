const servicesContainer = document.querySelector('.services-container');
const data = [
    {
        title: 'Технічне обслуговування',
        list: [
            'Планове ТО (технічне обслуговування)',
            'Заміна свічок, катушек',
            'Заміна всіх необхідних рідин'
        ],
        background: 'maintenance'
    },
    {
        title: 'Двигун',
        list: [
            'Димогенераторна діагностика, планова заміна комплектів ГРМ',
            'Кап.ремонт ДВЗ, ремонт ГБЦ, заміна прокладки ГБЦ',
            'Перевірка герметичності системи охолодження',
        ],
        background: 'engine'
    },
    {
        title: 'Підвіска',
        list: [
            'Діагностика, повний ремонт ходової частини',
            'Усунення дефектів та заміна відпрацьованих деталей',
            'Планова заміна мастила та/або сальників пивідів'
        ],
        background: 'susp'
    },
    {
        title: 'Трансмісія',
        list: [
            'Планова заміна мастила та сальників пивідів',
            'Заміна гранати, пильовиків гранат',
            'Повний ремонт трансмісії'
        ],
        background: 'trans'
    },
    {
        title: 'Автоелектрика',
        list: [
            'Діагностика',
            'Ремонт стартера/генератора'
        ],
        background: 'elec'
    },
    {
        title: 'Гальмівна система',
        list: [
            'Ремонт гальмівної системи',
            'Заміна гальмівних дисків/колодок',
            'Заміна гальмівних циліндрів',
        ],
        background: 'breaks'
    },
    {
        title: 'Кузовні роботи',
        list: [
            'Антикорозійна обробка авто (обробка днища)',
            'Інші види кузовних робіт'
        ],
        background: 'body'
    },
    {
        title: 'Шиномонтаж',
        list: [
            'Балансування',
            'Прокатка дисків'
        ],
        background: 'tires'
    },
    {
        title: 'Развал - Сходження',
        list: [
            '3D развал-сходження',
            'Регулювання розвалу-сходження'
        ],
        background: 'convergence'
    }
]

const serviceList = () => {

    data.forEach(el => {
        const block = document.createElement('div');
        block.classList.add('service-block');
        '-service_section'
        // block.style.background = `url("../img/${el.background}-service_section.png") center / cover no-repeat`;
        let list = el.list.map(el => {
            return `<li class="content-li">${el}</li>`;
        })

        block.innerHTML = `
            <div class="block-header" style="background: url('../img/${el.background}-service_section.png') center / cover no-repeat">
                <div class="block-title">
                    ${el.title}
                </div>
                <div class="block-button">
                    <div class="lin-hr"></div>
                    <div class="line-vr"></div>
                </div>
            </div>
            <div class="block-content">
                <ul class="content-list">
                    ${list.join('')}
                </ul>
                <button class="contact-button">
                    Замовити консультацію
                </button>
            </div>`;

        servicesContainer.append(block);
    });

    const buttonArr = document.querySelectorAll('.block-header');
    const contentArr = document.querySelectorAll('.block-content');

    buttonArr.forEach((el, i) => {
        el.addEventListener('click', () => {
            // console.log(i);
            // console.dir(el);
            // console.dir(contentArr[i]);
            contentArr[i].classList.contains('content-open') ? contentArr[i].classList.remove('content-open') : contentArr[i].classList.add('content-open');
            el.classList.contains('block-open') ? el.classList.remove('block-open') : el.classList.add('block-open');
        })
    })
}

export default serviceList;