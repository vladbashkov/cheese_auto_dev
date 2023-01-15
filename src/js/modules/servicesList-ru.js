const servicesContainer = document.querySelector('.services-container_ru');

const data = [
    {
        title: 'Техническое обслуживание',
        list: [
            'Плановое ТО (техническое обслуживание)',
            'Замена свечей, катушек',
            'Замена всех необходимых жидкостей'
        ],
        background: 'maintenance'
    },
    {
        title: 'Двигатель',
        list: [
            'Дымогенераторная диагностика, плановая замена комплектов ГРМ',
            'Кап.ремонт ДВС, ремонт ГБЦ, замена прокладки ГБЦ',
            'Проверка герметичности системы охлаждения',
        ],
        background: 'engine'
    },
    {
        title: 'Подвеска',
        list: [
            'Диагностика, полный ремонт ходовой части',
            'Устранение дефектов и замена отработанных деталей',
            'Плановая замена масла и/или сальников приводов'
        ],
        background: 'susp'
    },
    {
        title: 'Трансмиссия',
        list: [
            'Плановая замена масла и сальников пыльников пыльников',
            'Замена гранаты, пыльников гранат',
            'Полный ремонт трансмиссии'
        ],
        background: 'trans'
    },
    {
        title: 'Автоэлектрика',
        list: [
            'Диагностика',
            'Ремонт стартера/генератора'
        ],
        background: 'elec'
    },
    {
        title: 'Тормозная система',
        list: [
            'Ремонт тормозной системы',
            'Замена тормозных дисков/колодок',
            'Замена тормозных цилиндров',
        ],
        background: 'breaks'
    },
    {
        title: 'Кузовные работы',
        list: [
            'Антикоррозийная обработка авто (обработка днища)',
            'Другие виды кузовных работ'
        ],
        background: 'body'
    },
    {
        title: 'Шиномонтаж',
        list: [
            'Балансировка',
            'Прокатка дисков'
        ],
        background: 'tires'
    },
    {
        title: 'Развал - Сходжение',
        list: [
            '3D развал-схождение',
            'Регулировка развала-схождения'
        ],
        background: 'convergence'
    }
]

const serviceListRu = () => {

    data.forEach(el => {
        const block = document.createElement('div');
        block.classList.add('service-block');
        let list = el.list.map(el => {
            return `<li class="content-li">${el}</li>`;
        })

        block.innerHTML = `
            <div class="block-header" style="background: url('img/${el.background}-service_section.png') center / cover no-repeat">
                <div class="block-title">
                    ${el.title}
                </div>
                <div class="block-button">
                    <div class="lin-hr"></div>
                    <div class="line-vr"></div>
                </div>
            </div>
            <div class="block-content" onclick="${function click(e) {console.log(e.target.value)}}">
                <ul class="content-list">
                    ${list.join('')}
                </ul>
                <button class="contact-button">
                    Заказать консультацию
                </button>
            </div>`;

        servicesContainer.append(block);
    });

    const buttonArr = document.querySelectorAll('.block-header');
    const contentArr = document.querySelectorAll('.block-content');

    buttonArr.forEach((el, i) => {
        el.addEventListener('click', () => {
            contentArr[i].classList.contains('content-open') ? contentArr[i].classList.remove('content-open') : contentArr[i].classList.add('content-open');
            el.classList.contains('block-open') ? el.classList.remove('block-open') : el.classList.add('block-open');
        })
    })
}

export default serviceListRu;