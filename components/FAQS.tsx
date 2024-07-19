import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQS = () => {
  return (
    <div className='max-container'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-sky-500'>Frequently Asked Questions</h1>
      <div className="mt-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="sm:text-lg">What is the eligibility for this program ?</AccordionTrigger>
            <AccordionContent>
              There is no eligibility criteria for this program.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="sm:text-lg">How much will I get after successful referral ?</AccordionTrigger>
            <AccordionContent>
              After every successful referral, you will get 1200 rupees cashback when the referer enrolled for this course.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="sm:text-lg">How many people I can refer?</AccordionTrigger>
            <AccordionContent>
              You can refer as many as you can. There is no such limit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQS