import React from 'react';
import { motion as Motion } from 'framer-motion';
const Career = () => {
    return (
        <Motion.div
            className='mx-2'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileTap={{ scale: 0.99 }}>
            <div class="flex flex-col">
                <h1 class="font-bold text-3xl pb-8">You might be wondering...</h1>

                <div class="flex gap-4 items-center">

                    <div class="flex flex-col">
                        <h2 class="font-medium text-lg italic">
                            Can I cancel at anytime?
                        </h2>

                        <span>
                            Yes, you can cancel anytime. No questions are asked while you cancel but we would
                            highly appreciate if you will give us some feedback.
                        </span>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="flex gap-4 items-center">

                    <div class="flex flex-col">
                        <h2 class="font-medium text-lg italic">
                            My team has credits. How do we use them?
                        </h2>

                        <span>
                            Once your team signs up for a subscription plan. This is where we sit down, grab a
                            cup of coffee and dial in the details.
                        </span>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="flex gap-4 items-center">

                    <div class="flex flex-col">
                        <h2 class="font-medium text-lg italic">
                            Upgrade License Type
                        </h2>

                        <span>
                            There may be times when you need to upgrade your license from the original type you
                            purchased and we have a solution that ensures you can apply your original purchase
                            cost to the new license purchase.
                        </span>
                    </div>
                </div>
            </div>
        </Motion.div>
    );
};

export default Career;