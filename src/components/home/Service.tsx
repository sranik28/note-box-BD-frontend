
import Service from '../../assets/service/services.webp';
import Service2 from '../../assets/service/services2.webp';
import Service3 from '../../assets/service/services3.webp';


const Services = () => {
    const serviceData = [
        {
            image: Service,
            title: 'FREE AND FAST DELIVERY',
            description: 'Free delivery for all orders over $140',
        },
        {
            image: Service2,
            title: '24/7 CUSTOMER SERVICE',
            description: 'Friendly 24/7 customer support',
        },
        {
            image: Service3,
            title: 'MONEY BACK GUARANTE',
            description: 'We reurn money within 30 days',
        },
    ];
    return (
        <section className="container my-10  md:my-20">

            <div className="flex flex-col justify-around gap-6 md:flex-row md:gap-0">
                {serviceData.map((data, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-1 ">
                        <img alt="" src={data.image} />
                        <h6 className="font-semibold">{data.title}</h6>
                        <p className="md:text-sm text-[12px] font-normal">
                            {data.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Services;
