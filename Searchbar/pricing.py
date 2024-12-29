import math
class DynamicPriceCalculator:
    def __init__(self, service_type, experience_level, ratings, 
                 positive_comments, negative_comments, complexity, proximity):
        self.service_type = service_type
        self.experience_level = experience_level
        self.ratings = ratings
        self.positive_comments = positive_comments
        self.negative_comments = negative_comments
        self.complexity = complexity
        self.proximity = proximity

        self.base_prices = {
            "Plumbing": {"Junior": 100, "Mid": 200, "Senior": 300},
            "Electrical": {"Junior": 120, "Mid": 220, "Senior": 320}
        }

    def get_base_price(self):
        if (self.service_type not in self.base_prices or 
            self.experience_level not in self.base_prices[self.service_type]):
            raise ValueError("Invalid service type or experience level")
        return self.base_prices[self.service_type][self.experience_level]

    def calculate_comment_factor(self):
        total_comments = self.positive_comments + self.negative_comments
        return max(1, (self.positive_comments - self.negative_comments) / max(total_comments, 1))

    def calculate_rating_factor(self):
        return 1 + (self.ratings - 3) * 0.1  

    def calculate_complexity_factor(self):
        return 1 + self.complexity * 0.15  

    def calculate_proximity_factor(self):
        return 1 + max(0, math.log(10 / max(self.proximity, 1)))  

    def calculate_dynamic_price(self):
        base_price = self.get_base_price()
        comment_factor = self.calculate_comment_factor()
        rating_factor = self.calculate_rating_factor()
        complexity_factor = self.calculate_complexity_factor()
        proximity_factor = self.calculate_proximity_factor()

        dynamic_price = base_price  * rating_factor * comment_factor

        min_price = dynamic_price
        max_price = dynamic_price * complexity_factor

        return round(min_price, 2), round(max_price, 2)
