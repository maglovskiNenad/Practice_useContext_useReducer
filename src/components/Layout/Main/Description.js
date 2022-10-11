import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className={classes.description}>
      <h1>You started the day with shopping </h1>
      <p>
        Online shopping is a form of electronic commerce which allows consumers
        to directly buy goods or services from a seller over the Internet using
        a web browser or a mobile app. Consumers find a product of interest by
        visiting the website of the retailer directly or by searching among
        alternative vendors using a shopping search engine, which displays the
        same product's availability and pricing at different e-retailers. As of
        2020, customers can shop online using a range of different computers and
        devices, including desktop computers, laptops, tablet computers and
        smartphones.
      </p>
      <p>
        An online shop evokes the physical analogy of buying products or
        services at a regular "bricks-and-mortar" retailer or shopping center;
        the process is called business-to-consumer (B2C) online shopping. When
        an online store is set up to enable businesses to buy from another
        businesses, the process is called business-to-business (B2B) online
        shopping. A typical online store enables the customer to browse the
        firm's range of products and services, view photos or images of the
        products, along with information about the product specifications,
        features and prices.
      </p>
    </div>
  );
};

export default Description;
